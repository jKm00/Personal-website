import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, primaryKey, serial, text, varchar } from "drizzle-orm/pg-core";

const TABLE_PREFIX = 'portfolio_'

export const status = pgEnum(`${TABLE_PREFIX}status`, ['Finished', 'In-progress'])

export const projects = pgTable(`${TABLE_PREFIX}projects`, {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
  thumbnailPath: varchar('thumbnail_path', { length: 256 }),
  thumbnailAlt: varchar('thumbnail_alt', { length: 256 }),
  status: status('status'),
  description: text('description'),
  content: text('content'),
  published: boolean('published')
})

export const projectRelations = relations(projects, ({ many }) => ({
  images: many(images),
  features: many(features),
  resources: many(resources),
  contributers: many(projectContributers)
}))

export const images = pgTable(`${TABLE_PREFIX}images`, {
  id: serial('id').primaryKey(),
  projectId: integer('project_id').notNull().references(() => projects.id),
  path: varchar('path', { length: 256 }),
  alt: varchar('alt', { length: 256 })
})

export const imageRelations = relations(images, ({ one }) => ({
  project: one(projects, {
    fields: [images.projectId],
    references: [projects.id]
  })
}))

export const features = pgTable(`${TABLE_PREFIX}features`, {
  id: serial('id').primaryKey(),
  projectId: integer('project_id').notNull().references(() => projects.id),
  content: text('content')
})

export const featureRelations = relations(features, ({ one }) => ({
  project: one(projects, {
    fields: [features.projectId],
    references: [projects.id]
  })
}))

export const resources = pgTable(`${TABLE_PREFIX}resources`, {
  id: serial('id').primaryKey(),
  projectId: integer('project_id').notNull().references(() => projects.id),
  label: varchar('label', { length: 256 }),
  link: varchar('link', { length: 256 })
})

export const resourceRelations = relations(resources, ({ one }) => ({
  project: one(projects, {
    fields: [resources.projectId],
    references: [projects.id]
  })
}))

export const contributers = pgTable(`${TABLE_PREFIX}contributers`, {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  link: varchar('link', { length: 256 })
})

export const contributerRelations = relations(contributers, ({ many }) => ({
  project: many(projectContributers)
}))

export const projectContributers = pgTable(`${TABLE_PREFIX}project_contributers`, {
  projectId: integer('project_id').notNull().references(() => projects.id),
  contributerId: integer('contributer_id').notNull().references(() => contributers.id)
}, (table) => ({
  pk: primaryKey({ columns: [table.projectId, table.contributerId] })
}))

export const projectContributersRelations = relations(projectContributers, ({ one }) => ({
  project: one(projects, {
    fields: [projectContributers.projectId],
    references: [projects.id]
  }),
  contributer: one(contributers, {
    fields: [projectContributers.contributerId],
    references: [contributers.id]
  })
}))
