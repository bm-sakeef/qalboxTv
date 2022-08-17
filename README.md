# Qalbox Tizen Smart Tv App


## Installation

Clone the repo & run npm install.

Run npm run build.

Start Tizen studio.

Create a new blank project.

When creating be sure to pick Template as type, TV as application, Web Application as application type and a Empty template.

At the last step of creating a blank project. Click on 'More Properties' and disable "Use default location", now browse to your build folder in your react native project and set it as your Tizen Studio project.

Go to your build folder and Copy the generated Tizen web app files (icon.png, .settings, .project, config.xml, .tproject) into ./public folder of your react project.

Warning! Only edit the generated Tizen web app files in your ./public folder and not in tizen studio!

Disable validators in Tizen Studio preference Tizen Studio/Web/Editor/Javascript Editor
