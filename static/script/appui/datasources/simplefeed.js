/**
* @preserve Copyright (c) 2013 British Broadcasting Corporation
* (http://www.bbc.co.uk) and TAL Contributors (1)
*
* (1) TAL Contributors are listed in the AUTHORS file and at
*     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
*     not this notice.
*
* @license Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* All rights reserved
* Please contact us for an alternative licence
*/

define(
  "sampleapp/appui/datasources/simplefeed",
  [
    "antie/class"
  ],
  function(Class) {
    return Class.extend({
      // You will probably want to do something more useful then returning static data
      loadData : function(callbacks) {
        callbacks.onSuccess(
          [
            {
              "id":"1",
              "title":"Drishyam",
              "img" : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/drishyam-story_647_080215020436.jpeg?jo_of8z8P6vbsR7VxKUo_ZZTP7E9cnxj&size=770:433"
            },
            {
              "id":"2",
              "title":"Drishyam2",
              "img" : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/Drishyam_2_1200x768.jpeg?4r1AsjDVQUERBCTYdSCFQgf8XW25tXbr&size=770:433"
            },
            {
              "id":"3",
              "title":"Lagaan",
              "img" : "https://images.desimartini.com/media/mobile/mobile_6368_lagaan_xlg.jpg"
            },
            {
              "id":"4",
              "title":"Kabir singh",
              "img" : "https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg"
            },
            {
              "id":"5",
              "title":"Ddlj",
              "img" : "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/08/ddlj-pinterest.jpg"
            },
            {
              "id":"6",
              "title":"Kahani",
              "img" : "https://i.pinimg.com/236x/49/67/98/496798451707d17f7d220d12157b1e59--bollywood-posters-movie-posters.jpg"
            }
          ]
        );
      }
    });
  });
