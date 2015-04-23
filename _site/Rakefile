namespace :pages do
  desc "Compile and publish Jekyll site into branch 'master' on Github for Pages"
  task :publish do
    system "git checkout -b tmp"
    system "git filter-branch --subdirectory-filter _site/ -f"
    system "git push -f origin tmp:master"
    system "git checkout source"
    system "git branch -D tmp"
  end
end
