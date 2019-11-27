CREATE TABLE "Topics" (
  "id" SERIAL PRIMARY KEY,
  "topic" varchar,
  "joinCode" varchar UNIQUE,
  "timePerRound" int NOT NULL DEFAULT 180,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "ChatMessages" (
  "id" SERIAL PRIMARY KEY,
  "authorID" int,
  "content" varchar NOT NULL,
  "column" int NOT NULL,
  "row" int NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "Authors" (
  "id" SERIAL PRIMARY KEY,
  "userName" varchar UNIQUE,
  "topicID" int,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE "ChatMessages" ADD FOREIGN KEY ("authorID") REFERENCES "Authors" ("id");

ALTER TABLE "Authors" ADD FOREIGN KEY ("topicID") REFERENCES "Topics" ("id");
