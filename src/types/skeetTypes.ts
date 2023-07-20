export type SkeetCloudConfig = {
  app: AppConfig
  cloudRun: CloudRunConfig
  db: DbConfig
  taskQueues?: TaskQueue[]
  cloudArmor?: CloudArmor[]
}

export type AppConfig = {
  name: string
  projectId: string
  template: string
  region: string
  appDomain: string
  nsDomain: string
  lbDomain: string
  hasLoadBalancer: boolean
}

export type CloudRunConfig = {
  name: string
  url: string
  cpu: number
  memory: string
  maxConcurrency: number
  minInstances: number
  maxInstances: number
}

export type DbConfig = {
  databaseVersion: string
  cpu: number
  memory: string
  storageSize: number
  whiteList?: string
}

export type TaskQueue = {
  queueName: string
  location: string
  maxAttempts: number
  maxInterval: string
  minInterval: string
  maxConcurrent: number
  maxRate: number
}

export type Rules = {
  priority: string
  description: string
  options: { [key: string]: string }
}
export type CloudArmor = {
  securityPolicyName: string
  rules: Rules[]
}
