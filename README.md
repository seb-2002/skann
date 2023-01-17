# Readme

## Serving the site

In the terminal window, navigate to the home folder.

Run `npm run serve`

In the browser window, navigate to [localhost:8080](http://localhost:8080/en)

## Updating the site

In the terminal window, make a new git branch in which to work by running `git checkout -b "new_branch_name"`

Make the changes.

Run `npm run bundle` to update the javascript.

## Deploying the updates

Merge the new branch into the master by running

```
git add .
git commit -m "this is what I changed"
git checkout master
git merge new_branch_name
git push
heroku login
git push heroku login
```

## Database

### Agenda

Data format:

```
   "title": {
      type: "",
      type_href: "",
      title: "",
      project_href: "",
      dates: "",
      institution: "",
      institution_href: "",
      place: "",
    }
```

Types:

- performance/premiere
- residency
- teaching

hrefs:

- internal: remember initial slash!
