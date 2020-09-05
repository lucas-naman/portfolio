rm -r ./dist
ng build --prod --base-href https://lucasnaman.com
mv dist/portfolio/* dist
rm -r dist/portfolio
ngh -no-silent
echo "Go to"
echo "https://github.com/lucas-naman/portfolio/settings"
echo "Check the \"GitHub Pages part\""
echo "Custom domain section: put \"lucasnaman.com\""