

const audio = document.getElementById('player');
const vinyl = document.getElementById('vinyl');
const coverImage = document.getElementById('coverImage');
const tracks = document.querySelectorAll('.tracklist li');
const lyricsBox = document.getElementById('lyrics');

// داده های متن هر آهنگ
const lyricsAllTracks = {

  'Khosha': [
    { time: 0, text: '— Khosha —' },
    { time: 3, text: '  خوشا آنان که ...' },
    { time: 9, text: '' },
    { time: 11, text: '  خوشا آنان که ...' },
    { time: 15, text: '' },
    { time: 41, text: 'خوشا آنان که تن از جان نداند ' },
    { time: 50, text: ' تن و جانی به جز جانان ندانند' },
    { time: 60, text: ' به دردش خو گرند سالان و ماهان ' },
    { time: 67, text: 'به درد خویش تن و درمان ندانند' },
    { time: 74, text: 'ندانند' },        
    { time: 76, text: '' },                
    { time: 78, text: 'خوشا آنان که تن' }, 
    { time: 82, text: 'خوشا آنان که ' },   
    { time: 86, text: 'خوشا آنان ' },     
    { time: 92, text: 'خوشا' },         
    { time: 97, text: 'خوشا انان که تن' }, 
    { time: 110, text: 'خوشا آنان که تن از جان ندانند' }, 
    { time: 124, text: 'تن و جانی به جز جانان ندانند' },  
    { time: 132, text: 'به دردش خو گرند سالان و ماهان' }, 
    { time: 142, text: 'به درد خویش تن و درمان ندانند' },
    { time: 151, text: 'خوشا    خوشا    خوشا' },          
    { time: 160, text: 'خوشا آنان که...' },               
    { time: 164, text: 'خوشا آنــــــان ' },      
    { time: 171, text: 'خوشا' },                    
    { time: 172, text: '' },                            
    { time: 186, text: '  خوشا    انان    که    تن   از   جان  ندانند!' }, 
    { time: 216, text: 'خوشا آنان که تن' },               
    { time: 194, text: '' },                            
  ],


  'Track Two': [
    { time: 0, text: '— ttttttttttt —' },
    { time: 5, text: 'خط اول متن آهنگ دوم' },
    { time: 12, text: 'خط دوم متن آهنگ دوم' },
    { time: 20, text: 'خط سوم متن آهنگ دوم' }
  ],
  'Nemidoonom': [
    { time: 0, text: '— Nemidoonom —' },
    { time: 25, text: 'نمی دونم دلوم دیوانه کیست؟' },
    { time: 32, text: 'کجا آواره و در خانه کیست؟' },
    { time: 38, text: 'نمی  دونم دل سر گشته مو' },
    { time: 45, text: 'اسیر نرگس مستانه کیست؟' },
    { time: 50, text: 'نمیـــــ  دونم' },
    { time: 57, text: 'نمی ذونم  نه  نمی دونم' },
    { time: 65, text: 'نمی دونم دلوم دیوانه کیست؟' },
    { time: 70, text: 'کجا آواره و در خانه کیست؟' },
    { time: 75, text: 'نمی  دونم دل سر گشته مو' },
    { time: 77, text: 'اسیر نرگس مستانه کیست؟' },
    { time: 83, text: 'نمی دونم' },
    { time: 103, text: 'نه نمی دونم' },
    { time: 104, text: '' },
    { time: 113, text: 'نمی دونم' },
    { time: 140, text: 'نمـــــــی دونم' },
    { time: 147, text: '' },
    { time: 153, text: 'نمــی دونــم دلــوم دیوانه کیست؟' },
    { time: 160, text: 'کجا آواره و در خانه کیست؟' },
    { time: 162, text: 'نمی  دونم دل سر گشته مو' },
    { time: 163, text: 'اسیر نرگس مستانه کیست؟' },
    { time: 166, text: 'نمی دونم' },
    { time: 173, text: 'تمی دونم' },
    { time: 217, text: '' },
    { time: 235, text: 'نــه  نمی  دونم' }
  ]
};

let currentLyrics = [];
let currentLine = -1;
// 

function playTrack(el, src, cover) {
  tracks.forEach(t => {
    t.classList.remove('active');
    t.classList.add('dim'); // همه کمرنگ شوند
  });

  el.classList.add('active');
  el.classList.remove('dim'); // فقط انتخاب‌شده پررنگ

  // تغییر عکس آلبوم با افکت
  coverImage.style.opacity = 0;
  setTimeout(() => {
    coverImage.src = cover;
    coverImage.style.opacity = 1;
  }, 200);

  // تغییر آهنگ
  audio.src = src;
  audio.play();
  vinyl.classList.add('playing');

  // تعیین متن آهنگ
  const trackName = el.textContent.split('—')[1].trim();
  currentLyrics = lyricsAllTracks[trackName] || [];
  currentLine = -1;
  lyricsBox.textContent = '';
}


// function playTrack(el, src, cover) {
//   tracks.forEach(t => t.classList.remove('active'));
//   el.classList.add('active');

//   // تغییر عکس آلبوم با افکت
//   coverImage.style.opacity = 0;
//   setTimeout(() => {
//     coverImage.src = cover;
//     coverImage.style.opacity = 1;
//   }, 200);

//   // تغییر آهنگ
//   audio.src = src;
//   audio.play();
//   vinyl.classList.add('playing');

//   // تعیین متن آهنگ
//   const trackName = el.textContent.split('—')[1].trim();
//   currentLyrics = lyricsAllTracks[trackName] || [];
//   currentLine = -1;
//   lyricsBox.textContent = '';
// }





// به‌روزرسانی متن هنگام پخش
// audio.addEventListener('timeupdate', () => {
//   const currentTime = Math.floor(audio.currentTime);

//   for (let i = currentLyrics.length - 1; i >= 0; i--) {
//     if (currentTime >= currentLyrics[i].time && currentLine !== i) {
//       currentLine = i;

//       lyricsBox.classList.remove('show');
//       setTimeout(() => {
//         lyricsBox.textContent = currentLyrics[i].text;
//         lyricsBox.classList.add('show');
//       }, 200);

//       break;
//     }
//   }
// });

audio.addEventListener('pause', () => { vinyl.classList.remove('playing'); });
audio.addEventListener('ended', () => {
  vinyl.classList.remove('playing');
  lyricsBox.classList.remove('show');
});

// پخش آهنگ اول پیش فرض
playTrack(tracks[0], './Rahim Yeganeh - Khosha.mp3', './رحیم.jpg');


// وقتی آهنگ پلی شد، دیسک بچرخد
audio.addEventListener('play', () => {
  vinyl.classList.add('playing');
});

// وقتی آهنگ متوقف شد یا تمام شد، دیسک هم متوقف شود
audio.addEventListener('pause', () => {
  vinyl.classList.remove('playing');
});

audio.addEventListener('ended', () => {
  vinyl.classList.remove('playing');
});

//// به‌روزرسانی متن هنگام پخش
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;

  for (let i = currentLyrics.length - 1; i >= 0; i--) {
    if (currentTime >= currentLyrics[i].time) {
      if (currentLine !== i) {
        currentLine = i;
        lyricsBox.textContent = currentLyrics[i].text;
        lyricsBox.classList.add('show');
      }
      break;
    }
  }
});
//  عفب  جلو کردن آهنگ
function seek(seconds) {
  let newTime = audio.currentTime + seconds;

  // جلوگیری از منفی یا بیشتر از طول آهنگ
  if (newTime < 0) newTime = 0;
  if (newTime > audio.duration) newTime = audio.duration;

  audio.currentTime = newTime;
}

//  ذکمه دانلود
function downloadCurrentTrack() {
  const currentSrc = audio.src;
  if (!currentSrc || currentSrc === '') return;

  const link = document.createElement('a');
  link.href = currentSrc;
  // نام فایل را از آدرس استخراج می‌کنیم
  const fileName = currentSrc.split('/').pop();
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
