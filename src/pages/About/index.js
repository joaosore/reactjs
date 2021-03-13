import React, { useState, useEffect } from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';

import { Container } from './styled';

function About() {
  return (
    <Container>
      <Title type="ABOUT" descriptopn="Scroll down. Know more about me" />
      <div className="box-conteudo">
        <p>
          Hi, I’m João Marcos lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent gravida accumsan sapien, ut ullamcorper diam egestas
          vel. Etiam cursus ultricies velit eget vestibulum. Suspendisse
          volutpat nulla metus, sit amet malesuada lacus rutrum non.
        </p>
        <div className="bar"></div>
        <p className="titulo">
          <b>CONHECIMENTOS</b>
        </p>
        <p>
          HTML-CSS, AJAX, ASP, PHOTOSHOP, Web Designer e PHP. Banco de dados SQL
          & mySQL. Linguagem de Programação: WEB/PHP, Angular e Ionic, Testes
          Manuais em Sistemas, Suporte a usuários de Sistemas, Instalação e
          Suporte de ERP, Redes e Manutenção de Computadores, Pacote Office.
          Conhecimento básico em Junit e Selenium.
        </p>
        <div className="bar"></div>
        <p>Any question? Talk to me</p>
        <Button color="#FFF" hover="#000">
          contact
        </Button>
      </div>
    </Container>
  );
}

export default About;
