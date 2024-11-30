document.addEventListener("DOMContentLoaded", () => {
  const videoData = [
    {
      title: "Video 1",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F0204%20(2)(2).mp4?alt=media&token=6e429ff4-4032-45a8-a1cf-99fc9b54d073&token=",
    },
    {
      title: "Video 2",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FSKSL_%E1%9E%96%E1%9F%92%E1%9E%99%E1%9E%B6%E1%9E%94%E1%9E%B6%E1%9E%9B%E1%9E%87%E1%9F%86%E1%9E%84%E1%9E%BA%E1%9E%9A%E1%9E%9B%E1%9E%B6%E1%9E%80%E1%9E%9F%E1%9E%93%E1%9F%92%E1%9E%9B%E1%9E%B6%E1%9E%80%E1%9F%8B_1080x1080.mp4?alt=media&token=e2104e05-fc89-4913-8521-5ca82cd1a60e&token=",
    },
    {
      title: "Video 3",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FSKSL%20-%20Anti-Aging-Program%20-%201080x1080.mp4?alt=media&token=ad954c68-8ae8-47a9-8dbb-aa831e3b64ff&token=",
    },
    {
      title: "Video 4",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FHO%20-%20Video%20Thalassesmia%20Last.mp4?alt=media&token=a72f82d5-e818-4bdd-994e-c033e009f6ab&token=",
    },
    {
      title: "Video 5",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F20-05-23%20-%20Comp%203.mp4?alt=media&token=60da29e3-737b-42d6-b07c-d928ec925dd2&token=",
    },
    {
      title: "Video 6",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2Fvideo-semi-final-5.mp4?alt=media&token=b20b7c3f-d636-4d4e-8899-9a8ea929928c&token=",
    },
    {
      title: "Video 7",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F31-05-2023%20-%20SKS-PH-Video.mp4?alt=media&token=eb92e2ee-6096-47cb-a141-a01e8607f635&token=",
    },
    {
      title: "Video 8",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2Fvideo_2023-06-06_15-15-24.mp4?alt=media&token=7b2e6eb1-538e-46f7-8bb4-715ddfb2a446&token=",
    },
    {
      title: "Video 9",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FAll%20Service%20in%20One.mp4?alt=media&token=7503c43f-5026-4c10-9157-e1d4937507ff&token=",
    },
    {
      title: "Video 10",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FSKL%20-%20%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%BC%E1%9E%98%E1%9F%89%E1%9E%BC%E1%9E%9B%E1%9E%9F%E1%9E%B7%E1%9E%93%E1%9E%A2%E1%9F%8A%E1%9E%BB%E1%9F%86%E1%9E%91%E1%9E%BC%E1%9E%80.mp4?alt=media&token=fecfd754-6f6b-4db9-91fd-7d5d2350d145&token=",
    },
    {
      title: "Video 11",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FSKS%20-%20%E1%9E%80%E1%9E%84%E1%9E%8A%E1%9E%B6%E1%9E%80%E1%9F%8B%E1%9E%80%E1%9F%92%E1%9E%93%E1%9E%BB%E1%9E%84%E1%9E%9F%E1%9F%92%E1%9E%94%E1%9E%BC%E1%9E%93.mp4?alt=media&token=4f84eb95-d344-453b-8da6-68a1471f1063&token=",
    },
    {
      title: "Video 12",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2Fvideo%20hifu%20-%20vaginal%20-4.mp4?alt=media&token=da5873ee-8e8a-44e7-8a49-9733a278ac23&token=",
    },
    {
      title: "Video 13",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F%E1%9E%98%E1%9E%B6%E1%9E%8F%E1%9E%B6%E1%9E%94%E1%9E%B7%E1%9E%8F%E1%9E%B6%E1%9E%94%E1%9E%B6%E1%9E%9A%E1%9E%98%E1%9F%92%E1%9E%98%E1%9E%8E%E1%9F%8D%E1%9E%96%E1%9E%B8%E1%9E%80%E1%9E%BC%E1%9E%93%E1%9E%96%E1%9E%B8%E1%9E%94%E1%9E%89%E1%9F%92%E1%9E%A0%E1%9E%B6%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%9F%E1%9F%8B%E1%9E%91%E1%9E%B6%E1%9E%94.mp4?alt=media&token=8651c2bd-fc67-4c61-945c-c7dba66efc67&token=",
    },
    {
      title: "Video 14",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FCells%20%26%20Gene%20Therapy%20-%20Part%20-%201.mp4?alt=media&token=1bb024b4-aa75-43b5-bd71-329bb9e6d3e8&token=",
    },
    {
      title: "Video 15",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2Fsdfgwegas_3.mp4?alt=media&token=6aa46f51-1570-45ec-b675-627c5c0eaaa9&token=",
    },
    {
      title: "Video 16",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F0225%20(2).mp4?alt=media&token=acc1384f-3a7e-4a97-80d1-5bf460e38a97&token=",
    },
    {
      title: "Video 17",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F0224.mp4?alt=media&token=48b5fe12-1e78-4a71-aa59-fe5466cfec6b&token=",
    },
    {
      title: "Video 18",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2Fupdated%20-07-03-204.mp4?alt=media&token=6d82a0af-640c-491f-b82d-7f61f8b08245&token=",
    },
    {
      title: "Video 19",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F0406(2).mp4?alt=media&token=9a39c25a-5e50-42e7-9498-448a91398b08&token=",
    },
    {
      title: "Video 20",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FVideo%20-%201%20Ho%20Last%20Updated.mp4?alt=media&token=0471fc75-912c-4f77-915e-666b8fccc570&token=",
    },
    {
      title: "Video 21",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F1123%20(4)(1).mp4?alt=media&token=0ed96a8c-05a0-4433-8904-fe677c0f8412&token=",
    },
    {
      title: "Video 22",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2FPromotion%20RC%20last%20updatd.mp4?alt=media&token=9d948bec-c80d-43c1-895c-bff713c41bee&token=",
    },
    {
      title: "Video 23",
      
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F0911-copy(3).mp4?alt=media&token=23e1f4b8-c212-4a05-94aa-5cffd2323831&token=",
    },
    {
      title: "Video 24",
      url: "https://firebasestorage.googleapis.com/v0/b/vandeth-5927b.appspot.com/o/videos%2F0914.mp4?alt=media&token=d84e760a-12c2-4d4c-8b96-2eaeae49e340&token=",
    },
  ];

  const videoListContainer = document.getElementById("videoList");

  // Generate video blocks dynamically
  videoData.forEach(video => {
    const videoBlock = document.createElement("div");
    videoBlock.className = "video-block";
    videoBlock.setAttribute("data-video", video.url);

    videoBlock.innerHTML = `
    <video><source src="${video.url}" type="video/mp4"></video><p>${video.title}</p>
    `;

    videoListContainer.appendChild(videoBlock);
  });

  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeModal = document.getElementById("closeModal");

  // Add event listener for dynamically created blocks
  document.querySelectorAll(".video-block").forEach(block => {
    block.addEventListener("click", () => {
      const videoSrc = block.getAttribute("data-video");
      videoPlayer.src = videoSrc;
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoPlayer.pause();
      videoPlayer.src = "";
    }
  });
});
