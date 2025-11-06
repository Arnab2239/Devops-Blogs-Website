module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = ">= 19.0"

  cluster_name    = var.cluster_name
  cluster_version = "1.27"  # set desired EKS version
  subnets         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id

  # Enable EKS control plane logging to CloudWatch
  cluster_enabled_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]

  node_groups = {
    default = {
      desired_capacity = 2
      max_capacity     = 4
      min_capacity     = 2

      instance_type = "t3.medium"
      key_name      = ""   # optional ssh key
    }
  }

  manage_aws_auth = true

  # Map IAM OIDC provider for IRSA
  create_irsa = true

  tags = {
    "Project" = "devops-blog"
  }
}
