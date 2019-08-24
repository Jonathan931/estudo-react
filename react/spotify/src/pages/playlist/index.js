import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';
import Loading from '../../components/Loading';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }

  renderDetails() {
    const playlist = this.props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            { !!playlist.songs && <p>{playlist.songs.length} músicas</p>}
            <button>Play</button>
          </div>
        </Header>

        <SongList cellpading={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th><img src={ClockIcon} alt="Duração" /></th>
            </tr>
          </thead>

          <tbody>
            { !playlist.songs ?
              (<tr>
                <td colSpan={5}>
                  Nenhuma música cadastrada
                </td>
              </tr>)
             :
             ( playlist.songs.map( song =>
             (<tr key={song.id}>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>{song.title}</td>
              <td>{song.author}</td>
              <td>{song.album}</td>
              <td>3:26</td>
            </tr>
            )))}
          </tbody>
        </SongList>
      </Container>
    );
  }

  componentDidMount() {
    this.loadPlaylistDeatils();
  }

  loadPlaylistDeatils = () => {
    const { id } = this.props.match.params;
    this.props.getplaylistDetailsRequest(id);
  };
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
