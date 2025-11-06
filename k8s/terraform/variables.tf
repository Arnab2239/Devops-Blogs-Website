variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "cluster_name" {
  type    = string
  default = "devops-blog-eks"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "domain_name" {
  type = string
  description = "Route53 hosted zone domain (example.com)"
}

variable "hosted_zone_id" {
  type = string
  description = "Route53 hosted zone id for the domain"
}
