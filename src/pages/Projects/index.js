import React, { useState } from 'react';

import {
  Container,
  BoxProjects,
  Project,
  BoxContainerProjects,
} from './styled';

import Title from '../../components/Title';
import Item from '../../components/Item';

import ImgJPG from '../../assets/01.jpg';

function Projects() {
  const [devItens, setDevItens] = useState([
    {
      url: '/project/project01',
      img: ImgJPG,
      color: '#36BFF4',
    },
    {
      url: '/project/project02',
      img: ImgJPG,
      color: '#36BFF4',
    },
  ]);

  const [engItens, setEngItens] = useState([
    {
      url: '/project/project03',
      img: ImgJPG,
      color: '#64DDB8',
    },
    {
      url: '/project/project04',
      img: ImgJPG,
      color: '#64DDB8',
    },
    {
      url: '/project/project05',
      img: ImgJPG,
      color: '#64DDB8',
    },
    {
      url: '#',
      img: ImgJPG,
      color: '#64DDB8',
    },
  ]);

  return (
    <Container>
      <Title type="PROJECT" descriptopn="Scroll down. See all projects." />
      <BoxContainerProjects>
        <BoxProjects>
          <h2 className="dev">FRONT E BACK</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            gravida accu.
          </p>
          <Project>
            {devItens.map((item, key) => (
              <Item key={key} item={item} />
            ))}
          </Project>
        </BoxProjects>
        <BoxProjects>
          <h2 className="eng">COMPUTER ENGINNER</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            gravida accu.
          </p>
          <Project>
            {engItens.map((item, key) => (
              <Item key={key} item={item} />
            ))}
          </Project>
        </BoxProjects>
      </BoxContainerProjects>
    </Container>
  );
}

export default Projects;
