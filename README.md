# user-module-sample-run-taskeditor-api

This is a sample module that have following features:

- Get all tasks defined in `Task Editor` in an array.
- Select certain task among task array.

## Overview

This module provides the following features:

- Through message `get_taskfile`:

  - Get all tasks defined in task editor in an array.

- Through message `select_task`:

  - Set the current task by name.

## Usage Guide

1. Set several files in Task Editor.
2. Click `Get task lists`, and task list will appear in to bottom.
3. Click one of the tasks in the list.
4. Click `Click here to set selected program as current program` to set selected task as current task.
5. Go back to Task Editor, and you'll see current task has changed.

## Note.

This module is a sample module, so there may be limitations in functionality and performance.

## Used Dart-API

- https://apis.drdart.io/classes/dart_api.ModuleService.html
- https://apis.drdart.io/interfaces/dart_api.IModuleChannel.html
- https://apis.drdart.io/classes/dart_api.Message.html
