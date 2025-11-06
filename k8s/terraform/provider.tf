provider "aws" {
  region = var.aws_region
  # credentials via env or shared profile
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"   # for CloudFront ACM cert
}
