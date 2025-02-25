"use client";  // Ensure this is marked as a client-side component
import { Gallery } from "next-gallery"

const images = [
  { src: '/gallery/Bowery2.jpg', aspect_ratio: 3 / 2 },
  { src: '/gallery/Keenans.jpeg', aspect_ratio: 6 / 4 },
  { src: '/gallery/Waves.jpeg', aspect_ratio: 7 / 5 },
  { src: '/gallery/PointingUp.JPG', aspect_ratio: 3 / 2 },
  { src: '/gallery/Brewers1.jpeg', aspect_ratio: 6 / 4 },
  { src: '/gallery/Cheers.jpeg', aspect_ratio: 3 / 2 },
  { src: '/gallery/DOTF.JPG', aspect_ratio: 3 / 2 },
  { src: '/gallery/Ortliebs.jpeg', aspect_ratio: 9 / 12 },
  { src: '/gallery/Post Recording.jpeg', aspect_ratio: 12 / 9 },
  { src: '/gallery/Ortliebs2.JPEG', aspect_ratio: 3 / 4 },
  { src: '/gallery/GregPoint.jpeg', aspect_ratio: 9 / 16 },
  { src: '/gallery/X.jpeg', aspect_ratio: 16 / 9 },
  { src: '/gallery/Looking.JPG', aspect_ratio: 3 / 2 },
  { src: '/gallery/BackToBack.jpeg', aspect_ratio: 5 / 7 },
  { src: '/gallery/Brewers2.jpeg', aspect_ratio: 6 / 4 },
  { src: '/gallery/Gazing.jpeg', aspect_ratio: 3 / 4 },
  { src: '/gallery/eyes.JPG', aspect_ratio: 3 / 2 },
  { src: '/gallery/Smiles.JPG', aspect_ratio: 3 / 2 },
  { src: '/gallery/Saxy.jpeg', aspect_ratio: 9 / 16 },
  { src: '/gallery/CrowdFromStage.jpeg', aspect_ratio: 3 / 4 },
  { src: '/gallery/Bowery.jpg', aspect_ratio: 6 / 7 },
  { src: '/gallery/BeatlesRooftop.jpeg', aspect_ratio: 6 / 4 },
  { src: '/Parkways Film.jpg', aspect_ratio: 16 / 9 }
]








export default function Photos() {

  const widths = [ 500, 1000, 1600 ]
  const ratios = [ 2.2, 4, 6, 8 ]

  return (
    <div className="flex flex-col gap-10 pt-16">
    <Gallery {...{ widths, ratios, images }} lastRowBehavior="fill" />
</div>
  );
}
