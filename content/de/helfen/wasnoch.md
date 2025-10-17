---
title: Welche Ideen hast du?
weight: 50
photo: https://res.cloudinary.com/dzw4emsdt/image/upload/v1638310934/website/AdobeStock_164367110_oce42l.webp
action: Schreib uns!
---

Hast du  eine Idee oder eine Möglichkeit zur Unterstützung, an die wir noch nicht gedacht haben? Wir sind dabei!

<!--more-->

Teile uns deine Idee hier mit und wir setzen uns mit dir in Verbindung :)

{{<rawhtml>}}
<span>
<style> 
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
checkbox {
  width: auto;
  float: left;
  padding: 12px 20px;
  margin: 8px 4px;
  box-sizing: border-box;
}
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
button {
    font-family: "CCSignLanguage Regular", system-ui!important;
    letter-spacing: 0.07em;    
    background-color:#5b637f !important;
    color:white;
    margin: 10px 10px 10px 0;
    font-size: 1.4rem;
    padding: 0 10px 0 10px;
    border-radius: 6px;
}
</style>
<form id="ideas" method="POST" data-netlify="true"  action="/thanks">
  <p style="visibility:hidden;">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>  
  <label for="name">Dein Name:</label>
  <input type="text" name="name" required>
  <label for="email">E-Mail-Adresse:</label>
  <input type="email" name="email" required>
  <label for="message">Deine Nachricht:</label>
  <textarea name="message" rows="10" cols="30" form="ideas"></textarea>  
  <input type="checkbox" name=privacy value="x" required> Ich stimme der Speicherung und Verarbeitung meiner persönlichen Daten durch die Freie Schule Ostfriesland zu.<br/>
  <button type="submit">Absenden</button>
</form>
</span>
{{</rawhtml>}}