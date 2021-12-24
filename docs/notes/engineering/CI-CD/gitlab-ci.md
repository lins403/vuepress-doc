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



## 参考资料

[Development guide for GitLab CI/CD templates | GitLab](https://docs.gitlab.com/ee/development/cicd/templates.html)

[Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/index.html)

[GitLab CI/CD - 废物大师兄 - 博客园](https://www.cnblogs.com/cjsblog/p/12256843.html)