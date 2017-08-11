import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

var ipaddr = 'http://localhost:5000/v2/';

@Injectable()
export class DockerService {

  constructor(private http: Http) { }
  
  getImages(): Observable<any> {

       const url = ipaddr+'_catalog'
       return this.http.get(url).map(
       res => {
        const data = (res.json());
        console.log(JSON.stringify(data));
        return data;
      }
     )
  }
 

 getInfo(val) {
  const url = ipaddr + val + '/manifests/latest' // actual image name has to be passed here
   console.log(url);
  return this.http.get(url).map(
       res => {
        const info = (res.json());
        console.log(JSON.stringify(info));
        return info;
    }
    )
 }
  
  getVersions(val) {
    const url = ipaddr + val + '/tags/list' // actual image name has to be passed here
    console.log(url);
    return this.http.get(url).map(
    res => {
      const info = res.json();
      console.log(JSON.stringify(info));
      return info;
    })
  }
  
  getDelete(image, version) {
    const url = ipaddr + image + '/manifests/' + version// actual image name has to be passed here
    console.log(url);
    return this.http.get(url).map(
    res => {
      console.log(res.json());
      return res.json();
      })
  }
  
  
}


// curl -X GET http://localhost:5000/v2/kishore/manifests/latest

/* to get the sha256 value for deleting an image
curl -v --silent -H "Accept: application/vnd.docker.distribution.manifest.v2+json"  -X GET http://localhost:5000/v2/kishore/manifests/latest 2>&1 | grep Docker-Content-Digest | awk '{print ($3)}'
  curl -H "Accept: application/vnd.docker.distribution.manifest.v2+json" -k -v -X GET https://dns-name-of-repo/v2/image-name/manifests/latest/
*/

/* TO delete the Images from registry 
 * curl -v -s -X DELETE "localhost:5000/v2/kishore/blobs/sha256:cbb2acf4..." ( layerDigests )
curl -v -s -X DELETE "localhost:5000/v2/kishore/manifests/sha256:66846..." ( Docker-Content-Digest )
 */
