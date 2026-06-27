terraform {
  required_providers {
    contabo = {
      source  = "contabo/contabo"
      version = ">= 0.1.26"
    }
  }
}

provider "contabo" {
  oauth2_client_id     = var.contabo_client_id
  oauth2_client_secret = var.contabo_client_secret
  oauth2_user          = var.contabo_api_user
  oauth2_pass          = var.contabo_api_password
}

# NOTE: This instance was originally provisioned manually via the Contabo
# console, then imported into Terraform state (terraform import) for ongoing
# management. `region` and `period` are intentionally omitted from this
# config — they relate to the instance's billing contract, and managing them
# here risked Terraform attempting to modify the paid contract term on
# apply. Only `display_name` and `product_id` are actively managed.

resource "contabo_instance" "autocloud_node_contabo" {
  display_name = "autocloud-node-contabo"
  product_id   = "V92"
}