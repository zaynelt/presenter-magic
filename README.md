# Presenter Magic: 
Bring fun and maybe a bit more organization to your presentations! Plus, incorporate some cool tricks from the Lightning framework. Thanks to Salesforce DX, you can grok, rock and contribute back to this project if you want. 

## Installation instructions:

In the commands below, terms wrapped in \*asterisks\* signify places where you'll need to replace the dummy text we're providing with values that match your Salesforce DX setup.

1. Authenticate into your DX hub org (if you haven't already):
	
	```
	sfdx force:auth:web:login -d -a *myhub* 
	```
- Clone the food-truck repo:
	
	```
	git clone https://github.com/zaynelt/presenter-magic
	```
- Create a scratch org, and provide it with an alias:
	
	```
	sfdx force:org:create -s -f config/project-scratch-def.json -a *myalias*
	```
- Push the code you cloned from Github to your scratch org:
	
	```
	sfdx force:source:push
	```
- Assign the 'ZBS_Content' permset to your user: 
	
	```
	sfdx force:user:permset:assign -n presentermagic
	```
- Open the scratch org:
	
	```
	sfdx force:org:open
	```

Or, deploy to SFDX using this button:

[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com/deploy?template=https://github.com/zaynelt/presenter-magic)

(Mad props 2 [Wade Wegner](https://github.com/wadewegner/sfdx-simple/) for the button magic...)


