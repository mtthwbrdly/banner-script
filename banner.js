/*! inject-banner-comment */
(() => {
  "use strict";
  if (window.top !== window.self) return; // don't run in iframes

  const payload = `
  
Designed and built by
                                       **                                                                       **    **                    
*7MMM.     *MMF*         mm     mm   *7MM                                     *7MM"""Yp*                      *7MM  *7MM                    
  MMMb    dPMM           MM     MM     MM                                       MM    Yb                        MM    MM                    
  M YM   *M MM   *6"Yb.mmMMmm mmMMmm   MMpMMMb.  .gP"Ya *7M*    *A    *MF*      MM    dP *7Mb*od8 *6"Yb.   *M""bMM    MM  .gP"Ya *7M*   *MF*
  M  Mb  M* MM  8)   MM  MM     MM     MM    MM *M*   Yb  VA   *VAA   *V        MM"""bg.   MM* "*8)   MM *AP    MM    MM *M*   Yb  VA   *V  
  M  YM.P*  MM   *pm9MM  MM     MM     MM    MM 8M""""""   VA *V  VA *V         MM    *Y   MM     *pm9MM 8MI    MM    MM 8M""""""   VA *V   
  M  *YM*   MM  8M   MM  MM     MM     MM    MM YM.    *    VVV    VVV          MM    *9   MM    8M   MM *Mb    MM    MM YM.    *    VVV    
.JML. **  .JMML.*Moo9^Yo.*Mbmo  *Mbmo.JMML  JMML.*Mbmmd*     W      W         .JMMmmmd9  .JMML.  *Moo9^Yo.*Wbmd"MML..JMML.*Mbmmd*    *V     
                                                                                                                                    *V      
                                                                                                                                 OOb"   
`;

  const html = document.documentElement;
  if (!html) return;

  // Avoid duplicates
  if (
    html.firstChild &&
    html.firstChild.nodeType === 8 &&
    html.firstChild.data.includes("Designed and built by")
  ) return;

  const comment = document.createComment("\n" + payload + "\n");

  // Put comment as the first child of <html>, with safe fallbacks
  if (typeof html.prepend === "function") {
    html.prepend(comment);
  } else if (html.firstChild) {
    html.insertBefore(comment, html.firstChild); // <-- 2 args
  } else {
    html.appendChild(comment); // earliest-parse fallback
  }
})();
