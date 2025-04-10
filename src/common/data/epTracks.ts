// **Editing the list of songs here will update the Songs page and the home page**
// **Be sure to add any audio files into 

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
    length: "2:40",
    audioPreview: "/audio/Waiting Again Mix 3.mp3"
  },
  {
    id: 2,
    title: "Middle Distance Baby",
    length: "3:07",
    audioPreview: "/audio/Middle Distance Mix 1.mp3"
  },
  {
    id: 3,
    title: "Any Other Way (Spin)",
    length: "2:13",
    audioPreview: "/audio/Spin Mix 3.mp3"
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