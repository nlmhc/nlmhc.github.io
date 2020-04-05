var ap = new APlayer
        ({
			element: document.getElementById('player'),
			narrow: false,
			autoplay: true,
			showlrc: false,
			fixed: false,
			listFolded: true,
			listMaxHeight: 90,
			music: [
					{
					title: 'Frisbee',
					author: 'Ahxello',
					url: 'http://music.163.com/song/media/outer/url?id=418602744.mp3',
					pic: 'https://p1.music.126.net/ugVRIWN5Nsjv062nDlG__w==/3412884103130816.jpg'
					},
					{
					title: 'Supersonic',
					author: 'Rob Gasser',
					url: 'http://music.163.com/song/media/outer/url?id=458496962.mp3',
					pic: 'https://p1.music.126.net/tWA1q8-nY8Yt5v0MAVbesw==/109951163571184976.jpg'
					}
				]
		});
ap.init();