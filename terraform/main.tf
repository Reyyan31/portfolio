# ============================================
# PROJECT AUTOCLOUD — OCI Infrastructure
# ============================================

terraform {
  required_providers {
    oci = {
      source  = "oracle/oci"
      version = "~> 6.0"
    }
  }
}

provider "oci" {
  tenancy_ocid     = var.tenancy_ocid
  user_ocid        = var.user_ocid
  fingerprint      = var.fingerprint
  private_key_path = var.private_key_path
  region           = var.region
}

resource "oci_core_vcn" "autocloud_vcn" {
  compartment_id = var.tenancy_ocid
  cidr_block     = "10.0.0.0/16"
  display_name   = "autocloud-vcn"
  dns_label      = "autocloudvcn"
}

resource "oci_core_internet_gateway" "autocloud_igw" {
  compartment_id = var.tenancy_ocid
  vcn_id         = oci_core_vcn.autocloud_vcn.id
  display_name   = "autocloud-igw"
  enabled        = true
}

resource "oci_core_route_table" "autocloud_rt" {
  compartment_id = var.tenancy_ocid
  vcn_id         = oci_core_vcn.autocloud_vcn.id
  display_name   = "autocloud-route-table"

  route_rules {
    destination       = "0.0.0.0/0"
    destination_type  = "CIDR_BLOCK"
    network_entity_id = oci_core_internet_gateway.autocloud_igw.id
  }
}

resource "oci_core_security_list" "autocloud_sl" {
  compartment_id = var.tenancy_ocid
  vcn_id         = oci_core_vcn.autocloud_vcn.id
  display_name   = "autocloud-security-list"

  egress_security_rules {
    destination = "0.0.0.0/0"
    protocol    = "all"
  }

  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 22
      max = 22
    }
  }

  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 80
      max = 80
    }
  }

  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 443
      max = 443
    }
  }

  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 6443
      max = 6443
    }
  }
}

resource "oci_core_subnet" "autocloud_subnet" {
  compartment_id    = var.tenancy_ocid
  vcn_id            = oci_core_vcn.autocloud_vcn.id
  cidr_block        = "10.0.1.0/24"
  display_name      = "autocloud-subnet"
  dns_label         = "autocloudnet"
  route_table_id    = oci_core_route_table.autocloud_rt.id
  security_list_ids = [oci_core_security_list.autocloud_sl.id]
}

data "oci_core_images" "ubuntu_arm" {
  compartment_id           = var.tenancy_ocid
  operating_system         = "Canonical Ubuntu"
  operating_system_version = "22.04"
  shape                    = "VM.Standard.E2.1.Micro"
  sort_by                  = "TIMECREATED"
  sort_order               = "DESC"
}

resource "oci_core_instance" "autocloud_node" {
  compartment_id      = var.tenancy_ocid
  availability_domain = var.availability_domain
  display_name        = "autocloud-node-1"
  shape               = "VM.Standard.E2.1.Micro"

shape_config {
  ocpus         = 1
  memory_in_gbs = 1
}

  source_details {
    source_type = "image"
    source_id   = data.oci_core_images.ubuntu_arm.images[0].id
  }

  create_vnic_details {
    subnet_id        = oci_core_subnet.autocloud_subnet.id
    assign_public_ip = true
    display_name     = "autocloud-vnic"
  }

  metadata = {
    ssh_authorized_keys = file(var.ssh_public_key_path)
  }
}