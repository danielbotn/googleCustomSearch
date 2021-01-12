interface IGImage {
  byteSize: number;
  contextLink: string;
  height: number;
  thumbnailHeight: number;
  thumbnailLink: string;
  thumbnailWidth: number;
  width: number;
}

export interface IImage {
  displayLink: string;
  fileFormat: string;
  htmlSnippet: string;
  htmlTitle: string;
  image: IGImage;
  kind: string;
  link: string;
  mime: string;
  snippet: string;
  title: string;
}