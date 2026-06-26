output "instance_public_ip" {
  description = "Public IP of your AutoCloud node"
  value       = oci_core_instance.autocloud_node.public_ip
}

output "instance_id" {
  description = "OCID of the compute instance"
  value       = oci_core_instance.autocloud_node.id
}

output "vcn_id" {
  description = "OCID of the Virtual Cloud Network"
  value       = oci_core_vcn.autocloud_vcn.id
}