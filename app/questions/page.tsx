

import React from 'react'
import Editor from '../components/Editor'
import Qform from '../components/Qform'








export default async function page() {


{/*
    const state = EditorState.create({ schema: mySchema });


    const opts = {
        getImageBuffer(src: string) {
          return anImageBuffer;
        },
      };


      const wordDocument = defaultDocxSerializer.serialize(state.doc, opts);

await writeDocx(wordDocument, (buffer) => {
  writeFileSync('HelloWorld.docx', buffer);
});
*/}
  return (
<div className='flex '>

<Qform></Qform>
  <Editor></Editor>
</div>
  )
}
