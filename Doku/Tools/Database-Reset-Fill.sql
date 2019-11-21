DROP TABLE "Authors" CASCADE ;
DROP TABLE "ChatMessages" CASCADE ;
DROP TABLE "Moderators" CASCADE ;
DROP TABLE "Rooms" CASCADE ;
DROP TABLE "Topics" CASCADE ;

CREATE TABLE "Topics" (
  "id" SERIAL PRIMARY KEY,
  "moderatorID" int,
  "topicName" varchar,
  "joinCode" varchar UNIQUE,
  "timePerRound" int NOT NULL DEFAULT 180,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "Rooms" (
  "id" SERIAL PRIMARY KEY,
  "topicID" int,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "ChatMessages" (
  "id" SERIAL PRIMARY KEY,
  "roomID" int,
  "authorID" int,
  "content" varchar NOT NULL,
  "column" int NOT NULL,
  "row" int NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "Authors" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar UNIQUE,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now()),
  "topicID" int,
  "socketID" varchar NOT NULL
);

CREATE TABLE "Moderators" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE,
  "pwHash" varchar,
  "createdAt" timestamp NOT NULL DEFAULT (now()),
  "updatedAt" timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE "Topics" ADD FOREIGN KEY ("moderatorID") REFERENCES "Moderators" ("id");

ALTER TABLE "Rooms" ADD FOREIGN KEY ("topicID") REFERENCES "Topics" ("id");

ALTER TABLE "ChatMessages" ADD FOREIGN KEY ("roomID") REFERENCES "Rooms" ("id");

ALTER TABLE "ChatMessages" ADD FOREIGN KEY ("authorID") REFERENCES "Authors" ("id");

ALTER TABLE "Authors" ADD FOREIGN KEY ("topicID") REFERENCES "Topics" ("id");


INSERT INTO "Moderators" (username, "pwHash") VALUES ('lpredovic','9a2eccd353ccd9eac9944417dc5a27fd8fbfc8b2');

INSERT INTO "Topics" ("moderatorID", "topicName", "joinCode") VALUES 
(NULL,'dolor','vpih'),
(NULL,'inventore','nsxs');

INSERT INTO "Rooms" ("topicID") VALUES 
('1'),
('2');

INSERT INTO "Authors" (name, "topicID", "socketID") VALUES 
('aut','1','prjp'),
('distinctio','2','llcw'),
('eum','1','kubq'),
('consequuntur','2','vzpr'),
('maxime','1','dtld'),
('voluptatem','2','rcxt'),
('omnis','1','dmti'),
('accusamus','2','xfwv'),
('rerum','1','qpyr'),
('illo','2','nxyc'),
('id','1','gmof'),
('autem','2','pant'),
('optio','1','oqgt'),
('quisquam','2','ecyp'),
('voluptas','1','qyhv'),
('laborum','2','xdom'),
('et','1','xkde'),
('non','2','gwqd'),
('dolores','1','ezzu'),
('doloremque','2','yoky');

INSERT INTO "ChatMessages" ("roomID", "authorID", content, "column", row) VALUES 
('1','1','Et alias ratione ut. Nesciunt nulla totam eligendi neque blanditiis ut. Ex incidunt officia vitae pariatur autem distinctio. Expedita harum rerum unde consequuntur.','1','5'),
('2','2','Hic aspernatur sequi illo voluptas quaerat culpa alias est. Aut provident quis earum qui. Asperiores quidem sint in vero ipsa aut dicta aspernatur. Ab delectus debitis ut tempore.','3','4'),
('1','3','Omnis sint et consequuntur animi itaque maiores cupiditate. Iusto ea rerum in ex. Aut impedit deserunt dignissimos velit laboriosam ipsum.','3','1'),
('2','4','Ex velit nesciunt est beatae fugit. Tempore quasi iure quia. Omnis aliquam eum tenetur earum deserunt in perferendis culpa.','1','5'),
('1','5','Corporis officia velit quo et. Laboriosam doloremque magni nihil. Repellat voluptas nostrum unde dignissimos. Omnis quia sed ullam voluptatem aperiam.','2','1'),
('2','6','Sequi deserunt ut voluptate esse possimus officia. Voluptatem aut voluptas tenetur aut incidunt dignissimos. Impedit aut itaque delectus laboriosam cum autem autem.','3','4'),
('1','7','Repellendus sit est aliquid quo et commodi aut. Sit et ipsum voluptas eius iusto quod voluptatibus. Voluptatem odio laborum dolores in.','2','5'),
('2','8','Quasi saepe pariatur sapiente accusamus. Atque hic quibusdam iste occaecati perferendis. Quisquam nemo voluptatum corporis totam aut et. Mollitia distinctio omnis iure odit doloremque.','2','4'),
('1','9','Possimus sit cumque voluptas quaerat officia provident et itaque. Ipsa eius accusamus eos. Incidunt atque non incidunt est consequatur suscipit. Laborum et corporis praesentium tempore aut rerum id.','1','1'),
('2','10','Sint aliquam eos dolorem repudiandae qui. Sint sed consequuntur et voluptatem possimus. Distinctio non a aut quo.','3','5'),
('1','11','Culpa corrupti libero accusantium dolore qui. Est rerum molestias mollitia rerum consequatur nobis accusamus quis. Consequatur quidem aut molestiae adipisci necessitatibus id sequi quo.','2','4'),
('2','12','Est cupiditate veritatis distinctio consequatur molestiae. Consequatur dolorem corrupti dolor dolor architecto aperiam. Sit qui omnis quasi sed nobis voluptas. Mollitia repudiandae rerum molestias.','2','5'),
('1','13','Nemo voluptas temporibus dolorem provident porro et. Aut tempora quia modi. Consequatur harum ipsam aut. Explicabo dolor harum sed rerum beatae velit.','3','4'),
('2','14','Mollitia maiores quos velit sit maiores magni culpa ex. Quos fugit expedita qui molestiae. Maiores error deleniti ut ut ut.','2','5'),
('1','15','Est rerum esse hic sed enim iure rerum. Ea minima est dolor voluptate. Praesentium quis omnis porro consequuntur repellat alias.','1','1'),
('2','16','Maxime quaerat ipsum cumque. Eaque deleniti iusto quam delectus minus quasi. Hic et omnis debitis ut similique.','3','3'),
('1','17','Cumque cum architecto beatae minima enim. Et consequatur et occaecati velit non earum ea delectus. Ut incidunt blanditiis autem laboriosam vel non. Deleniti et qui minima non sunt quos.','3','5'),
('2','18','Cumque quia sit ratione hic. At facilis corporis labore. Excepturi vel fuga dolorem modi adipisci at totam fuga.','1','4'),
('1','19','Blanditiis cum ratione non nobis voluptatem. Qui officia enim inventore exercitationem ipsa non aliquam aliquam. Est porro sint sit. Molestiae qui necessitatibus ut dicta.','2','5'),
('2','20','Sapiente aliquid perferendis voluptas laudantium aut officia. Harum quibusdam non ex eius inventore corrupti. Adipisci ipsum nihil quis nesciunt ut eos.','2','3'),
('1','1','Nam aut odit repudiandae ea delectus sit. Hic rem ullam dignissimos. Porro laudantium ea possimus. Quia aut vel amet harum repellat.','2','4'),
('2','2','Aut nisi amet sed aperiam. Sint at omnis deserunt harum. Dolorem voluptatum quae facere id id voluptates.','3','2'),
('1','3','Est aut et enim alias sed quisquam et. Enim omnis laboriosam magni tempore est. Est aliquam in autem soluta reprehenderit et.','3','1'),
('2','4','Ducimus mollitia minus est illum qui adipisci. Repudiandae perspiciatis tempore culpa esse voluptatem perspiciatis. Debitis suscipit quia possimus ab similique laborum vitae quis.','3','3'),
('1','5','Odit repudiandae odit aspernatur sequi totam. Nobis ut aut rerum sit voluptate repellendus perspiciatis praesentium. Dolor harum est perspiciatis doloremque commodi.','2','3'),
('2','6','Et enim et distinctio id. Dicta cupiditate nihil aut. Omnis quia inventore dolor pariatur totam est.','1','1'),
('1','7','Nam est similique ut libero. Asperiores facere qui qui quis voluptatem. Nihil sed explicabo voluptatem aliquid. Ipsa similique ut nihil accusamus. Maxime est facilis sapiente est facilis.','1','2'),
('2','8','Repudiandae officiis quia ea culpa. Quaerat nihil et id atque cupiditate.','3','1'),
('1','9','Ut totam exercitationem cumque vitae necessitatibus. Rerum nulla ab similique id eius dolor. Sed debitis maxime quo dicta dolor. Repudiandae exercitationem fugit consequuntur veniam.','1','1'),
('2','10','Dolor omnis nobis molestiae rerum sapiente. Et aliquam molestiae ut praesentium amet esse. Nam quidem ratione voluptas.','1','4'),
('1','11','Animi et iusto omnis ut aut eum. Voluptates dolorem odit distinctio repellat. Ullam aliquam odit animi accusamus et. Quas ea quidem officia rem autem.','3','4'),
('2','12','Omnis impedit praesentium nam autem voluptas autem. Fugit fuga eum corporis est consequuntur. Ut repellat corporis exercitationem.','2','5'),
('1','13','Laudantium quis nisi aut corporis libero. Eligendi explicabo eius rerum sapiente consequuntur consectetur aliquid. Eum impedit fuga autem praesentium incidunt. Rem sed velit neque consequuntur.','2','4'),
('2','14','Adipisci itaque omnis velit impedit dicta ullam. Laboriosam dolorem et odit est sit dolores aliquam. Deserunt vero quae adipisci et deserunt.','3','2'),
('1','15','Vel molestias autem ea veniam molestiae perferendis qui molestiae. Unde fugiat molestias voluptatem accusamus. Expedita quia praesentium itaque nobis optio.','2','4'),
('2','16','Nihil id et rerum esse dolore velit. Praesentium aut cumque consequuntur quas. Quam pariatur velit enim asperiores sequi nisi necessitatibus.','2','2'),
('1','17','Consequatur nihil est ut blanditiis est. Aut nihil nulla sapiente ea libero qui modi. Qui dolor nulla ea qui velit.','1','5'),
('2','18','Eius quod expedita sapiente vel quisquam. Voluptate et dolores ut perferendis eum perspiciatis dicta. Voluptas rerum possimus rem ut aut. Repellat dicta amet at aut voluptatem.','2','3'),
('1','19','Libero quam ut ab temporibus sapiente. Nihil sapiente consequatur magni ex occaecati possimus. Et aliquam placeat voluptatem aut sit eum corrupti. Dicta et hic eum deserunt sequi autem.','3','4'),
('2','20','Nemo delectus vel sint illo quaerat quia. Explicabo ut eaque eum quaerat. Ut maiores qui cum tenetur debitis qui.','1','3'),
('1','1','Fugit ullam veritatis asperiores consequatur. Dignissimos fuga itaque ut aperiam et dolores. Inventore corporis sit ipsam.','2','5'),
('2','2','Quidem eligendi quis in officia odit enim. Vel quia dolores et quaerat repellendus voluptatem consequatur.','3','3'),
('1','3','Dicta est rem earum eius et. Ad rem facilis amet voluptatem necessitatibus suscipit. Repellendus ullam ad deleniti eos illo. Nemo suscipit dolor sapiente est ab dolorum.','1','1'),
('2','4','Nihil sint est provident consequatur adipisci. Eum atque laborum rem quo nisi eaque. Et doloribus ipsum est aut eos quis consequatur.','1','5'),
('1','5','Quisquam aut dicta explicabo dolores delectus ullam. Consequatur ut aliquam illum ducimus rem. Consectetur quidem accusamus repellendus sunt minus eum iure.','1','5'),
('2','6','Et non id officiis porro. Consectetur nisi soluta hic ut iure inventore voluptate. Eius ullam ea in ipsum nam.','2','5'),
('1','7','Cupiditate nam eum et officiis deleniti quo. Totam eos totam ipsam. Officia amet repudiandae ex dolorem eum eaque.','3','3'),
('2','8','Repellat dolores sunt consectetur repudiandae fuga nihil. Dolorem natus quasi dolores et in eum ipsa. Est modi aliquid id voluptate tempora temporibus.','3','5'),
('1','9','Molestiae magni repellat facere temporibus enim et. Id eum est omnis doloremque aliquid quo suscipit. Id qui mollitia ut ex error cupiditate omnis repudiandae. Porro mollitia quam aut eveniet ut.','3','3'),
('2','10','Non exercitationem iure illum non quia. Exercitationem quo et maiores in rerum vel. Perspiciatis facere sapiente qui blanditiis. Accusamus sed sit suscipit excepturi.','2','4'),
('1','11','Veniam consectetur earum magnam est iste molestiae nam. Dicta voluptatibus voluptatem quis ipsa eaque. Culpa quia quis et nesciunt temporibus.','1','2'),
('2','12','Non ut porro mollitia officiis tempore consequatur tempora. Odio maiores harum quaerat et.','2','4'),
('1','13','Unde molestiae quia reiciendis totam. Alias nisi aut quo aliquid et adipisci earum hic. Architecto iure sapiente illo aut voluptas eos. Ea omnis qui sequi dignissimos fugit quidem.','1','4'),
('2','14','Sit aperiam quos atque minima. Et eligendi sunt velit a aperiam impedit. Quae et dolorem natus mollitia consequatur et.','3','5'),
('1','15','Temporibus suscipit itaque dolore culpa voluptatum cum. Aut in voluptas accusantium quam quia unde. Molestias repudiandae vel est qui veritatis. Omnis similique vel pariatur.','3','4'),
('2','16','Sit ipsam cum eos odio tempora vero. Aliquid voluptatem qui labore illo accusantium aliquam modi. Voluptate doloremque est dolorem architecto. Laudantium odit quia molestias nisi ullam autem.','1','4'),
('1','17','Et vitae autem repellat dicta adipisci. Mollitia beatae doloremque deserunt dolor ut nihil. Ut delectus est velit a debitis. Possimus a et fuga voluptatibus vel quas.','2','2'),
('2','18','Maiores sit nihil veritatis consectetur et. Soluta dolor quaerat delectus molestiae et. Quia officiis provident omnis quia explicabo qui.','1','4'),
('1','19','Aliquam laborum quia accusantium illo cum tempore. Sit et temporibus eum iusto. Tempore atque consequatur ratione exercitationem. Vel repellat esse est eum sed qui fugit ipsam. Rerum et incidunt est.','2','3'),
('2','20','Sint porro quod est sed qui blanditiis ullam. Illum consequatur doloribus soluta voluptatem sint. Eligendi consequatur vero qui non reprehenderit doloribus.','2','4'),
('1','1','Temporibus odit quos impedit et consequatur iusto voluptatem. Voluptas facilis minus mollitia. Quas veniam tempora eum iusto est error.','2','5'),
('2','2','Necessitatibus quis modi soluta fuga. Asperiores est et consequatur aliquid ut dolore. Eligendi recusandae voluptatem rerum quisquam sed rerum. Quis dicta unde et fugiat cum.','2','3'),
('1','3','Error ut eos harum ea ut. Deleniti quod ex consequuntur. Quidem nesciunt voluptatem qui laboriosam modi neque qui. Consectetur error quia fugiat doloremque totam ad.','3','1'),
('2','4','Et tenetur quos dolorum commodi voluptates amet tempora. Autem sit reprehenderit distinctio perferendis. Ut et sunt itaque quae. Voluptas autem et animi id quis.','2','5'),
('1','5','Esse recusandae velit quia numquam eum aut consequatur. Quo perspiciatis vel excepturi. Commodi enim eum commodi tempora. Distinctio saepe quis quos aliquid nisi repellendus animi dolorem.','2','5'),
('2','6','Odio et porro dolorum non quos. Eius voluptatem omnis culpa enim. Aut exercitationem autem provident voluptas et fugiat. Illum qui non quia hic et.','3','5'),
('1','7','Eos in consequatur aut pariatur. Accusantium voluptatem fugit excepturi quod. Sed commodi quas non eius.','3','2'),
('2','8','Soluta mollitia eum ipsa aspernatur. Ea ea sed debitis fuga vitae. Sit non deserunt quibusdam ea sed.','3','4'),
('1','9','Quia soluta repudiandae eos corporis alias est iure et. Veniam fugit et possimus ipsum eius.','2','2'),
('2','10','Tenetur similique aut necessitatibus est veniam est ut illo. Nam distinctio ea adipisci. Distinctio et nostrum iusto minus ipsa.','3','5'),
('1','11','Ea blanditiis voluptatum est sint nisi mollitia veritatis omnis. Saepe cum magnam voluptate quia sequi. Ipsum molestiae nam accusantium recusandae iusto. Error ex necessitatibus corporis est.','1','4'),
('2','12','Exercitationem ea eos voluptas. Aut ad perferendis numquam qui. Autem amet voluptas iusto tempore sapiente.','2','3'),
('1','13','Rerum rerum explicabo voluptatum eveniet dignissimos quisquam. Occaecati rem qui cumque voluptatum aut magnam saepe. Et ullam aliquid doloribus et eum quo.','1','5'),
('2','14','Qui ea dolorem nam doloribus repellendus ea ratione. Corrupti aut harum odio aperiam nesciunt ut voluptatem. Repellendus dolorem dolorem molestiae autem asperiores placeat.','2','2'),
('1','15','Sit autem et sed voluptas cupiditate omnis tempora. A harum praesentium at culpa quia ut eveniet. Possimus omnis nemo vero autem iste magnam. In id assumenda rerum omnis et neque.','1','4'),
('2','16','Dolor minima voluptatum non. Reiciendis voluptas voluptas laborum autem et. Et officia eos mollitia quas et adipisci.\nOdit animi nihil tenetur alias. Omnis at non qui ratione blanditiis qui.','3','3'),
('1','17','Quae quo sed ut qui commodi rem. Exercitationem occaecati qui facere aspernatur. Molestiae enim error est sint. Et beatae quis consequuntur.','1','3'),
('2','18','Velit consectetur aut occaecati fugiat qui qui. Ad et possimus sint voluptatem. Optio dicta quae corrupti incidunt.','2','2'),
('1','19','Voluptas cumque et commodi ut. Hic aut adipisci est rerum.\nEligendi laboriosam quisquam possimus debitis rerum. Repellendus rerum cumque ut rerum. Non sit voluptas perspiciatis dolore.','3','2'),
('2','20','Laboriosam et maxime minus similique totam. Et qui enim consectetur dolor et non sit qui. Facere sed minus sequi quod libero et maiores accusamus.','3','4'),
('1','1','Reprehenderit voluptas doloribus aliquid fuga. Consectetur non cumque veritatis dignissimos tenetur accusantium nesciunt. Et voluptas eum rerum doloribus.','3','5'),
('2','2','Omnis et ea quia voluptates quis. Aliquid dolores rerum esse eius possimus. Aut exercitationem sit sed sint. Soluta recusandae labore quia vel.','1','5'),
('1','3','Pariatur quia porro explicabo autem aliquid recusandae sapiente. Magni placeat nam quisquam aut. Ut laboriosam optio et ex ducimus.','2','1'),
('2','4','Est ut quam id corporis. Dolorem eos sed eveniet itaque explicabo unde quo exercitationem. Dolorem sapiente aut est eum beatae tenetur ea eius.','3','2'),
('1','5','Quas nesciunt voluptas error quisquam neque laboriosam ullam. Id voluptatem iste ut quis delectus illum. Laborum molestias necessitatibus expedita repudiandae magni distinctio.','3','4'),
('2','6','Molestias eos et blanditiis repellendus. Sed amet qui corporis rerum in. Harum perspiciatis impedit amet sunt placeat ab deleniti enim.','1','5'),
('1','7','Placeat et explicabo consequuntur harum quam laboriosam voluptatum aliquid. Id et nisi cum ea. Excepturi error voluptas et omnis repudiandae est. Aliquid voluptatum aut perferendis omnis architecto.','3','1'),
('2','8','Ut est accusantium animi alias recusandae. Quibusdam illum porro sint nostrum cumque eum. Dicta veniam non quam accusantium. Ut ea et laboriosam.','1','2'),
('1','9','Veritatis sit quae sit id. Et qui rerum quia. Et sed in quis.\nQuod aut id eligendi enim. Qui praesentium nemo non minima aliquid odio.','2','3'),
('2','10','Adipisci eum libero animi qui porro et. Blanditiis ut sequi pariatur quis. Sed aspernatur eum officia qui. Perspiciatis nobis commodi dolorum quo.','2','1'),
('1','11','Assumenda sed non dolorum est. Minus iure laboriosam deserunt dicta.\nEius rerum ut pariatur cum provident sit hic. Ea nostrum fugiat facere.','2','2'),
('2','12','Quos asperiores velit itaque. Quibusdam sit quis voluptatem et sunt quo ab. Perspiciatis repellat est at nostrum ut illum delectus nam. Consectetur sit magnam ducimus aut incidunt quam.','1','3'),
('1','13','Autem earum voluptate quidem veritatis accusamus rem repudiandae. Qui eligendi voluptatibus exercitationem. Velit rem eos consequuntur. Quia aut praesentium ratione.','1','2'),
('2','14','Placeat magni in id. Non aut voluptatem consequuntur eos quis. Laboriosam reiciendis eveniet consequatur tempore deserunt velit sapiente sed.','2','4'),
('1','15','Aut dolore quia enim aliquid. Hic quo officiis excepturi. Ex magni eaque eaque quia sed reiciendis tenetur autem. Consequuntur quis sunt alias veniam.','1','5'),
('2','16','Quia eaque dolores iure commodi. Rerum et vel alias praesentium quis deserunt accusamus. Et quas nulla et nam corporis qui dolorem. Explicabo et maxime consequuntur sequi.','2','4'),
('1','17','Aut sit vitae atque voluptates impedit sint. Perspiciatis sapiente delectus eos ut qui quam. Ullam perspiciatis nam quo dolor architecto. Quibusdam eos et molestiae architecto.','1','2'),
('2','18','Occaecati autem qui non corrupti nam culpa et. Perferendis alias porro facere itaque facere delectus. Sint expedita illo expedita et.','2','2'),
('1','19','Doloremque et enim sapiente nihil iure. Voluptatem voluptas aut velit aut temporibus. Et in commodi repellat molestias ea.','3','5'),
('2','20','Ut quisquam dicta ad quas expedita. In rerum culpa modi modi. Rerum nobis repudiandae ullam dolorem fuga.','2','3');