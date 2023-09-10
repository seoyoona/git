// DOM 로딩 완료 후 이벤트 처리
document.addEventListener('DOMContentLoaded', function(){
    const heartbeat = document.querySelector('.box');
    const msg = document.querySelector('.counter');
    let beater = 0;
    //이벤트 메시지 출력 함수들
    const iterate = () => {
      beater++;
      msg.innerText = `하트 ${beater} 번 뜀!`;
    }
    const start = () => {
        msg.innerText = `애니메이션 시작!`;
      }
    const end = () => {
        msg.innerText = `애니메이션 종료!`;
    }
    // 애니메이션 이벤트 리스너 등록
    heartbeat.addEventListener('animationstart', start);
    heartbeat.addEventListener('animationend', end);
    heartbeat.addEventListener('animationiteration', iterate);
});
