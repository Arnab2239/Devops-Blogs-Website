resource "random_id" "suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "infra_bucket" {
  bucket = "devops-blog"

  tags = {
    Name        = "devops-blog"
    Environment = var.env
  }
}
