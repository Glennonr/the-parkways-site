// **Editing the list of songs here will update the Songs page and the home page**

export type Track = {
    id: number;
    title: string;
    length: string;
    coverArt?: string;
    audioPreview?: string;
  };  
  
  // EP tracks data
  export const epTracks: Track[] = [
    {
      id: 1,
      title: "Waiting Again",
      length: "2:38",
      audioPreview: "/audio/Waiting-Again-Demo.mp3"
    },
    {
      id: 2,
      title: "Middle Distance Baby",
      length: "3:07",
      audioPreview: "/audio/Middle-Distance-Baby-Demo.mp3"
    },
    {
      id: 3,
      title: "Any Other Way (Spin)",
      length: "2:16",
      audioPreview: "/audio/Spin-Demo.mp3"
    },
    {
      id: 4,
      title: "Avaline",
      length: "2:50",
      audioPreview: "/audio/Avaline-Demo.mp3"
    },
    {
      id: 5,
      title: "Zynnie",
      length: "3:33",
      audioPreview: "/audio/Zynnie-Demo.mp3"
    },
  ];