# yarn <Badge text="v1.22.10" type="tip" />

Yarn stands for â*Yet Another Resource Negotiator*â, developed in 2016 by Facebook.

```
yarn
yarn add
yarn upgrade
```

[Migrating from npm | Yarn](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)

## yarn install

`yarn install` will install the exact version in the lockfile

```shell
$ yarn
yarn install v1.22.10
[1/4] ð  Resolving packages...
[2/4] ð  Fetching packages...
[3/4] ð  Linking dependencies...
[4/4] ð¨  Building fresh packages...
# [5/5] â»ï¸  Cleaning modules...
```

## yarn.lock

yarn.lock ç  exact versions è½å¹é package.json æ¶ï¼å°±ä¼ç´æ¥å®è£è¿ä¸ªçæ¬ï¼ä¸è½æ»¡è¶³æ¶æä¼éæ°å®è£å¹¶æ´æ° yarn.lock

```shell
# If you want to ensure yarn.lock is not updated, use --frozen-lockfile.
yarn install --frozen-lockfile
```

éè¦å­æ®µä¸å¶ä½ç¨

- `version` å­æ®µæ¯å¯ä¸ç¡®å®ççæ¬å·ï¼æ²¡æç¨^æ~è¡¨ç¤ºçæ¬åºé´ï¼**å¯ä»¥éå® package çå¯ä¸çæ¬**

- `integrity` å­æ®µæ¯ä¸ä¸²åå¸å¼ï¼ç¨äºå¯¹éè¿`resolved`ä¸è½½çæä»¶è¿è¡**å®æ´æ§æ ¡éª**ãå¦æåºç° diffï¼è¯´æåä¸ä¸ªä¸è½½é¾æ¥å¯¹åºçæä»¶è¢«ä¿®æ¹è¿ã

æ³¨æð¢

- `yarn.lock` æ¯èªå¨çæçï¼ä½ ä¸åºè¯¥å»æå¨çä¿®æ¹ã
- ä¸è¦éè¿ä¿®æ¹ `package.json` æ¥åçº§çæ¬ï¼è¿æ ·ä¼å¯¼è´ yarn.lock æ²¡ææ´æ°ã
- éè¿ `yarn add` å `yarn upgrade` æ¥èªå¨æ´æ° package.json å yarn.lock



### resolutions

resolutions å¯ä»¥çªç ´çæ¬éå¶

[Selective dependency resolutions | Yarn](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/#toc-how-to-use-it)

## autoclean

Cleans and removes unnecessary files from package dependencies.

å é¤ `node_modules` çå¨ `.yarnclean` ä¸­å£°æçæä»¶åæä»¶å¤¹ï¼ä»¥åå°ä¾èµåçå¤§å°

```bash
yarn autoclean -I #--init
yarn autoclean -F #--force
```



# åè

[yarn.lock ä½ éæç½äºåï¼](https://zhuanlan.zhihu.com/p/400193691)