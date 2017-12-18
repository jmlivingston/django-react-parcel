# Django React Parcel Demo

> Author: John Livingston

This project is a way to quickly setup a barebones Django environment. It integrates React using Parcel and will build, watch, and enables HMR at "blazing" fast speeds.

## Requirements

- [Node >= 6.0](https://nodejs.org)
- [Python >= 3.0](https://www.python.org)
- [Parcel](https://parceljs.org/)
- [Yarn](https://yarnpkg.com) (optional - you can replace yarn commands with npm)

## Project Structure

- server - This contains all of the Python Django code.
  - settings.py - TEMPLATE and STATIC variables point to the ui directory containing the build files.
  - templates - Each template file uses an include tag that poitns to bootstrapped files in the UI.
- ui - This was generated using create-react-app, but includes scripts for using with Parcel.
  - bootstrap - These files are used to wire up container components to be included in Django views.
  - dist - Output directory for Parcel.
  - .babelrc - Parcel needs this for advanced ES features. Tweak as needed.
  - build.js - A simple script for building or watching files using Parcel. This is currently required since Parcel does not support multiple entry.

## Start Django from Scratch

If you don't want to clone this project, you can start by running the following commands in your terminal.

> Note: I explicitly call my virtual environment "venv" to make it obvious. I also install Django in a server directory to keep the base directory clean, minimal, and descriptive. For example, we may add a "ui" or "client" directory for front-end resources.

```bash
python3 -m venv venv
. venv/bin/activate
pip install django
mkdir server
django-admin startproject main server
pip freeze > requirements.txt
python server/manage.py runserver
```

## Helper Scripts for package.json

Adding the following scripts to your package.json allows an easy way to install, migrate, and run your server.

```bash
"scripts": {
    "install": "cd ui && yarn && cd .. && python3 -m venv venv && . venv/bin/activate && pip install -r requirements.txt && exit",
    "migrate": ". venv/bin/activate && python server/manage.py migrate",
    "build:ui": "cd ui && node ./build",
    "run:server": ". venv/bin/activate && python server/manage.py runserver",
    "run:ui": "cd ui && node ./build --watch",
    "start": "npm-run-all  --parallel run:*"
}
```

Install after git clone

```bash
yarn
```

Migrate files to database (python)

```bash
yarn run migrate
```

Build production ready UI assets

```bash
yarn run build:ui
```

Start server and enable watch. You can also run ui and server separately using the corresponding commands.

```bash
yarn run start
```

## Add Views and Templates

1. Update TEMPLATES.DIRS in settings.py

```python
TEMPLATES = [
    {
        # ...
        'DIRS': [os.path.join(BASE_DIR, "templates")]
        # ...
    }
]
```

2. Create a views.py with the following

```python
from django.shortcuts import render

def main(request):
  return render(request, "main.html")
```

3. Update urls.py

```python
#...
from django.conf.urls import url
from main import views

urlpatterns = [
    url(r'^$', views.main)
    #...
]
```

4. Create a templates directory and add main.html with some HTML markup.
