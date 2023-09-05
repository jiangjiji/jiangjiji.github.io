yarn docs:build

Set-Location docs/.vuepress/dist

git init
git add -A
git commit -m ("Release on " +  (get-date -format "yyyyMM HHdd"))

git push -f git@github.com:jiangjiji/jiangjiji.github.io.git master

