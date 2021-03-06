// 문제 설명
// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// 제한사항
// genres[i]는 고유번호가 i인 노래의 장르입니다.
// plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// 장르 종류는 100개 미만입니다.
// 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// 모든 장르는 재생된 횟수가 다릅니다.

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
//return [4, 1, 3, 0]

// function solution(genres, plays) {
//   var answer = [];

//   const songListArray = [];
//   for(let i = 0; i < genres.length; i++){
//     songListArray.push([genres[i], plays[i], i]);
//   }
//   console.log(songListArray);

//   const songs = {};
//   songs[genres[]]

// const songList = [];

// for(let i = 0; i < genres.length; i++){
//   songList.push([genres[i], plays[i], i]);
// }

// songList.sort((a, b) => a[0].localeCompare(b[0])); //정렬

// const totalPlays = [[songList[0][0],songList[0][1]]];
// for(let i = 0; i < songList.length; i++){
//   const totalPlay = [];
//   if(songList[i][0])
//   totalPlay.push(songList[i][0],songList[i][1]);
//   totalPlays.push(totalPlay);
// }
// console.log(totalPlays);
// console.log(songList);

// for(let i = 0; i< songList.length; i++){
//   if(songList[i] === songList[0]){

//   }
// }

// const total = songList.reduce((acc,cur) => acc+cur[1],0);
// console.log(total);

// songList.sort((a,b) => b[1]-a[1]);
// console.log(songList);
// for(let i = 0; i < genres.length; i++){
//   const song = {};
//   song['genre'] = genres[i];
//   song['play'] = plays[i];
//   song['index'] = i;
//   songList.push(song);
// }

// const firstGenre = songList[0].genre;
// for(let i = 0; i < songList.length; i++){

// }
// const a = songList.filter((item) => item.genre === 'classic');
// console.log(a);
//   return answer;
// }

function solution(genres, plays) {
  var answer = [];
  const songs = {};
  for (let i = 0; i < genres.length; i++) {
    songs[genres[i]] = [];
  }
  for (let i = 0; i < genres.length; i++) {
    songs[genres[i]].push([plays[i], i]);
  }

  const totalPlaySongs = [];
  for (let prop in songs) {
    const total = songs[prop].reduce((acc, cur) => acc + cur[0], 0);
    const totalPlaySong = [prop, total];
    totalPlaySongs.push(totalPlaySong);
  } //[ [ 'classic', 1450 ], [ 'pop', 3100 ] ]

  totalPlaySongs.sort((a, b) => b[1] - a[1]); //[ [ 'pop', 3100 ], [ 'classic', 1450 ] ]
  console.log(totalPlaySongs);
  // console.log(songs);
  return answer;
}

solution(genres, plays);
