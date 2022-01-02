# GitLab CI/CD

## Pipeline

A typical pipeline might consist of four stages, executed in the following order:

- A `build` stage, with a job called `compile`.
- A `test` stage, with two jobs called `test1` and `test2`.
- A `staging` stage, with a job called `deploy-to-stage`.
- A `production` stage, with a job called `deploy-to-prod`.

## 配置

`.gitlab-ci.yml`

Check your .gitlab-ci.yml : \<project-url>/ci/lint

```yml
before_script:
  - npm install --force
cache:
  paths:
    - node_modules/

unit_test:
  stage: test
  script:
    - npm run test:unit
  after_script:
    - echo "test passed."
```

### Runner

[Install GitLab Runner on macOS | GitLab](https://docs.gitlab.com/runner/install/osx.html)

```shell
# 安装
brew install gitlab-runner
brew services start gitlab-runner
# 注册
gitlab-runner register
```

- executor选用shell
- executor选用docker	image: node:14.18.2



## cache

- [Caching in GitLab CI/CD | GitLab](https://docs.gitlab.com/ee/ci/caching/index.html#common-use-cases-for-caches)

```yaml
image: node:14
stages:
  - test&build

cache:
	# branch > stages > jobs
	# between jobs, per-branch
	key: $CI_COMMIT_REF_SLUG	# 内置的运行时predefined variables，我觉得就是分支名
  # between branches, per-job:
  key: $CI_JOB_NAME
  # per-job, per-branch
	key: "$CI_JOB_NAME-$CI_COMMIT_REF_SLUG"
	# per-stage, per-branch
	key: "$CI_JOB_STAGE-$CI_COMMIT_REF_SLUG"
  # To share a cache across all branches and all jobs, use the same key for everything
  key: one-key-to-rule-them-all
  
  policy: pull-push	#by default
  # the job downloads the cache when the job starts, and uploads changes to the cache when the job ends.
  
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline
  # --prefer-offline, 离线优先, disables online checks of cached packages.

build:
  stage: test
  script:
    - npm run test:unit
```





## 参考资料

[Development guide for GitLab CI/CD templates | GitLab](https://docs.gitlab.com/ee/development/cicd/templates.html)

[Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/index.html)

[GitLab CI/CD - 废物大师兄 - 博客园](https://www.cnblogs.com/cjsblog/p/12256843.html)

[GitLab Series' Articles - DEV Community](https://dev.to/marcinwosinek/series/13834)