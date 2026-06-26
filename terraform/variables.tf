variable "tenancy_ocid" {
  description = "Your OCI Tenancy OCID"
  type        = string
}

variable "user_ocid" {
  description = "Your OCI User OCID"
  type        = string
}

variable "fingerprint" {
  description = "API Key Fingerprint"
  type        = string
}

variable "private_key_path" {
  description = "Path to your OCI API private key (.pem)"
  type        = string
}

variable "region" {
  description = "OCI Region"
  type        = string
  default     = "ap-mumbai-1"
}

variable "availability_domain" {
  description = "OCI Availability Domain"
  type        = string
  default     = "dGpV:AP-MUMBAI-1-AD-1"
}

variable "ssh_public_key_path" {
  description = "Path to your SSH public key for VM access"
  type        = string
}