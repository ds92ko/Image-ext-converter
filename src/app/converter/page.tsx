import { createInvoice } from '@/app/converter/actions';
import { extensions } from '@/constants';

export default function Page() {
  return (
    <section>
      <form action={createInvoice}>
        <input
          type="file"
          name="files"
          multiple
        />
        <select name="extension">
          {extensions.map(extension => (
            <option value={extension}>{extension}</option>
          ))}
        </select>
        {/*<SubmitButton />*/}
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
