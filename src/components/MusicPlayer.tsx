import React, { Component, ChangeEvent } from "react";
import backgroundMusic from "/music/Sword Art Online - At Nightfall [Violin Cover].mp3";
import { GoMute, GoUnmute } from "react-icons/go";

interface State {
  isMuted: boolean;
  volume: number;
}

class MusicPlayer extends Component<object, State> {
  audioRef: React.RefObject<HTMLAudioElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      isMuted: false,
      volume: 0.05,
    };

    this.audioRef = React.createRef();
  }

  componentDidMount() {
    // Definir o volume inicial após o elemento de áudio estar pronto para reprodução
    if (this.audioRef.current) {
      this.audioRef.current.volume = this.state.volume;
    }
  }

  toggleMute = (): void => {
    this.setState((prevState) => ({ isMuted: !prevState.isMuted }));
  };

  adjustVolume = (event: ChangeEvent<HTMLInputElement>): void => {
    const volume = parseFloat(event.target.value);
    this.setState({ volume });

    if (this.audioRef.current) {
      this.audioRef.current.volume = volume;
    }
  };

  render() {
    const { isMuted, volume } = this.state;

    return (
      <div className="absolute top-6 right-6">
        {/* Botão de Mute */}
        <button onClick={this.toggleMute}>
          {isMuted ? (
            <GoMute className="text-white" />
          ) : (
            <GoUnmute className="text-white" />
          )}
        </button>

        {/* Controle de Volume */}
        <input
          type="range"
          min="0"
          hidden
          max="1"
          step="0.01"
          value={volume}
          onChange={this.adjustVolume}
        />

        <audio ref={this.audioRef} autoPlay loop muted={isMuted}>
          <source src={backgroundMusic} type="audio/mpeg" />
          Seu navegador não suporta a reprodução de áudio.
        </audio>
      </div>
    );
  }
}

export default MusicPlayer;
