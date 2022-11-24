// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import FlashController from "./flash_controller.js"
application.register("flash", FlashController)

import FormController from "./form_controller.js"
application.register("form", FormController)

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)

import RangeSliderController from "./range_slider_controller.js"
application.register("range-slider", RangeSliderController)

import SortLinkController from "./sort_link_controller.js"
application.register("sort-link", SortLinkController)
