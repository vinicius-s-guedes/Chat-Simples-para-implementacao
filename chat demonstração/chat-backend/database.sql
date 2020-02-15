create database chat;
	use chat;
	create table Usuarios(
		email varchar(60) PRIMARY key,
		senha varchar(60),
		avatar varchar(400)default 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png');


	select * from Usuarios;

	create table Conversas(
		id int AUTO_INCREMENT PRIMARY key,
		user1 varchar(60),
		user2 varchar(60)
		);



	CREATE TABLE Mensagem(
		id int AUTO_INCREMENT PRIMARY key,
		mensagem varchar(300),
		envio Datetime DEFAULT now(),
		usuarioid varchar(60),
		idConversas int,
		constraint fkusuario foreign key(usuarioid) references Usuarios(email) on delete cascade,
		constraint fkConversas foreign key(idConversas) references Conversas(id) on delete cascade
		);

	insert into Usuarios(email) values('cinhosg22@gmail.com'
		);
	insert into Usuarios(email) values('viniciusguedes122@gmail.com'
		);
	insert into  Conversas(id) value (default
		);
	insert into Mensagem(mensagem,usuarioid,idConversas) values ('bala','cinhosg22@gmail.com','1'
		);





	drop procedure enviar_mensagem;
	DELIMITER //
	create procedure enviar_mensagem(`mensagemp` varchar(200),`usuarioidp` varchar(60), `usuarioidp2` varchar(60))
		begin
		if((select 'sim' from Conversas where user1 = usuarioidp and user2=usuarioidp2) like 'sim'
			or (select 'sim' from Conversas where user1 = usuarioidp2 and user2=usuarioidp) like 'sim') 
		then
		INSERT INTO `mensagem`(`mensagem`, `usuarioid`, `idConversas`) VALUES (mensagemp,usuarioidp,(select id from Conversas where ((user1=usuarioidp and user2=usuarioidp2) or (user1=usuarioidp2 and user2=usuarioidp))));

		else
		insert into  Conversas(user1,user2) value (usuarioidp,usuarioidp2);

			INSERT INTO `mensagem`(`mensagem`, `usuarioid`, `idConversas`) VALUES (mensagemp,usuarioidp,(select id from Conversas where ((user1=usuarioidp and user2=usuarioidp2) or (user1=usuarioidp2 and user2=usuarioidp))));

			end if;
			end //
			DELIMITER ;

			call enviar_mensagem('ola','viniciusguedes122@gmail.com','cinhosg22@gmail.com');

call enviar_mensagem('aaaaaaa','cinhosg22@gmail.com','viniciusguedes122@gmail.com');


			drop procedure visualizar_mensagem;
			DELIMITER //
			create procedure visualizar_mensagem(`usuarioidp` varchar(60), `usuarioidp2` varchar(60))
				begin
				select * from Mensagem inner join Conversas on Conversas.id = Mensagem.idConversas where  Conversas.id=(select id from Conversas where ((user1=usuarioidp and user2=usuarioidp2) or (user1=usuarioidp2 and user2=usuarioidp))) group by Mensagem.id ;

				end //
				DELIMITER ;

				call visualizar_mensagem('viniciusguedes122@gmail.com','cinhosg22@gmail.com');