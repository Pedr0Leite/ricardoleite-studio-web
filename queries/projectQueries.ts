export const projectsQuery = `
query Projects {
  projects (first: 20) {
    project_id
    title
    tags
    year
    location
    info
    isFirstProject
    isLastProject
    images {
      fileName
      url
    }
  }
}      
`;

export const specificIDQuery = `
query SpecificID {
  projects (first: 20) {
    project_id
    title
    tags
    year
    location
    info
    isFirstProject
    isLastProject
    images {
      url
      mimeType
    }
  }
}`;

export const workProjectBlocksQuery = `
query Projects {
  projects (first: 20) {
    project_id
    title
    tags
    year
    location
    images {
      url
    }
  }
}     
`;

export const workBlocksQuery = `
query WorkBlocks {
  workBlockEntries (first: 20) {
    id
    blockNumber
    img {
      url
    }
    sectionNumber
    imgNumber
    project {
      id
      project_id
      title
      tags
    }
  }
}      
`;

export const aboutQuery = `
query Abouts {
  abouts {
    aboutTags
    aboutText
    image {
      url
    }
		blockNumber
    direction
    hasMoreThanOneParagraph
  }
}
`;

export const linkQuery = `
query Links {
  links {
    id
    label
    link
  }
}
`;

export const archiveQuery = `
query OtherWorks {
  otherworks(where: {active: true}) {
    id
    active
    image {
      url
    }
    name
    order
    video {
      url
    }
    aspectRatio
  }
}
`;
