import { createInvoice } from '@/app/actions';

export default function Page() {
  return (
    <main>
      <form action={createInvoice}>
        <input
          type="file"
          name="files"
          multiple
        />
        <select name="extension">
          <option value="webp">webp</option>
          <option value="png">png</option>
          <option value="jpg">jpg</option>
          <option value="jpeg">jpeg</option>
          <option value="svg">svg</option>
          <option value="ico">ico</option>
          <option value="gif">gif</option>
        </select>
        {/*<SubmitButton />*/}
        <button type="submit">submit</button>
      </form>
    </main>
  );
}
