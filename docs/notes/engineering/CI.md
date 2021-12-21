# 持续集成

https://github.com/ruanyf/jstraining/blob/master/docs/engineering.md

https://www.devopsauthority.tech/2021/02/09/github-actions-vs-travis-ci/

[Lerna](https://lerna.js.org/)

[CICD持续集成: .gitlab-ci.yml配置小记（gitlab-ci + gitlab-runner）](https://segmentfault.com/a/1190000021874825)

[使用YEOMAN创建属于自己的前端工作流](https://segmentfault.com/a/1190000004896264)

- [ ] Travis CI

- [ ] GitHub Actions

- [ ] GitLab CI

- [ ] Yeoman

- [ ] Lerna

- [ ] Docker

- [ ] appveyor



## GitLab CI/CD

### Pipeline

A typical pipeline might consist of four stages, executed in the following order:

- A `build` stage, with a job called `compile`.
- A `test` stage, with two jobs called `test1` and `test2`.
- A `staging` stage, with a job called `deploy-to-stage`.
- A `production` stage, with a job called `deploy-to-prod`.

### 配置

`.gitlab-ci.yml`

[Development guide for GitLab CI/CD templates | GitLab](https://docs.gitlab.com/ee/development/cicd/templates.html)

[Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/index.html)

[GitLab CI/CD](https://www.cnblogs.com/cjsblog/p/12256843.html)