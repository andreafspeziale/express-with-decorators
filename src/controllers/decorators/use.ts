import 'reflect-metadata'
import express from 'express'
import { MetadataKeys } from './MetadataKeys'

export const use = function (middleware: express.RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || []

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    )
  }
}
