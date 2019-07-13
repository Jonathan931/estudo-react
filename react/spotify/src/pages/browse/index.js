import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

export const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores múscias </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores múscias </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores múscias </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores múscias </p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
