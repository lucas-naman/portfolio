sudo npm install -g angular-cli-ghpages
rm -r ./dist
ng build --prod --base-href https://lucasnaman.com
mv dist/portfolio/* dist
rm -r dist/portfolio
ngh -no-silent
echo "Go to"
echo "https://github.com/lucas-naman/portfolio/settings/pages"
echo "Custom domain section: put \"lucasnaman.com\""