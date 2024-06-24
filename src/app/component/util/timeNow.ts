
export default function TimeNow() {
  
    const today = new Date();
    const usaTime = today.getTime() + (today.getTimezoneOffset() * 60 * 1000);
    const korTime = new Date(usaTime + (9 * 60 * 60 * 1000))

    return korTime.toLocaleDateString()+korTime.toLocaleTimeString()+"";
  }