Testing Grunt Task Failures
===========================

In building out a talk on [Grunt talk](https://github.com/tleen/somewww-talk-grunt), I found some tasks would silently not run. Eventually I found that by commenting out the [grunt-html-validation](https://github.com/praveenvijayan/grunt-html-validation) plugin these tasks would start working normally again. See Issue #[1](https://github.com/tleen/somewww-talk-grunt/issues/1), in that talk's project.

This project is for recreating and investigating the failure conditions.

In this project I try to combine html validation with [imagemin](https://github.com/gruntjs/grunt-contrib-imagemin), which depending on the order they are run will cause strange behavior. If validation comes before imagemin, imagemin will still run, but not operate on any files.

```shell
] grunt imagemin-fails

# imagemin will not operate on src/img/test.png

Running "clean:0" (clean) task
Cleaning dist/index.html...OK

Running "clean:1" (clean) task
Cleaning dist/test.png...OK

Running "validation:src" (validation) task
Validation started for.. src/html/index.html
>> Validation successful..

Running "imagemin:pngs" (imagemin) task
# why is nothing happening here?

Running "copy:html" (copy) task
Copied 1 files

Done, without errors.


```

```shell
grunt imagemin-works

# imagemin will operate on src/img/test.png

Running "clean:0" (clean) task
Cleaning dist/index.html...OK

Running "clean:1" (clean) task

Running "imagemin:pngs" (imagemin) task
 src/img/test.png (saved 9.33 kB - 15%)
Minified 1 image (saved 9.33 kB)

Running "validation:src" (validation) task
Validation started for.. src/html/index.html
>> Validation successful..

Running "copy:html" (copy) task
Copied 1 files

Done, without errors.
```
