import { DocSearch } from '@docsearch/react'

import '@docsearch/css'
import './AlgoliaDocSearch.css'

function AlgoliaDocSearch() {
    return (
        <DocSearch
            appId="461ZQ3AX3S"
            indexName="godruoyi"
            apiKey="c928a62c38a34b2cbfdb8323de9c9cc9"
        />
    )
}

export default AlgoliaDocSearch
