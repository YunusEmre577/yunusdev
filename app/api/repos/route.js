"use server";
import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
    auth: "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"
});

export async function GET(req) {
    try {
        const { data } = await octokit.repos.listForAuthenticatedUser();
        return NextResponse.json(data, {status: 200})
    } catch {
        return NextResponse.json({error: "Error!"}, {status: 500})
    }
}